using System;
using System.Linq;
using System.Security;
using Microsoft.SharePoint.Client;

namespace KATS.SharePoint.Assets
{
    class Program
    {
        static void Main(string[] args)
        {

            string siteUrl = GetSite();

            /* Prompt for Credentials */
            Console.WriteLine("Enter Credentials for {0}", siteUrl);

            string userName = GetUserName();
            SecureString pwd = GetPassword();

            /* End Program if no Credentials */
            if (string.IsNullOrEmpty(userName) || (pwd == null))
                return;

            // Open connection to Office365 tenant
            ClientContext cc = new ClientContext(siteUrl);
            cc.AuthenticationMode = ClientAuthenticationMode.Default;
            cc.Credentials = new SharePointOnlineCredentials(userName, pwd);

            // Load reference to content type collection
            Web web = cc.Web;

            //
            // Ensure that we have the initial config available.
            //
            CreateContentTypeIfDoesNotExist(cc, web);
            CreateSiteColumn(cc, web);
            AddSiteColumnToContentType(cc, web);
            CreateCustomList(cc, web);

        }

        private static void CreateCustomList(ClientContext cc, Web web)
        {
            ListCollection listCollection = cc.Web.Lists;
            cc.Load(listCollection, lists => lists.Include(list => list.Title).Where(list => list.Title == "Test KATS Request"));
            cc.ExecuteQuery();
            // Create the list, if it's not there...
            if (listCollection.Count == 0)
            {
                ListCreationInformation newList = new ListCreationInformation();
                newList.Title = "Test KATS Request";
                newList.QuickLaunchOption = QuickLaunchOptions.On;
                newList.TemplateType = (int)ListTemplateType.GenericList;
                newList.Description = "Stores KATS requests raised by the Audit team";
                List list = web.Lists.Add(newList);
                cc.ExecuteQuery();
            }
        }
        private static void CreateContentTypeIfDoesNotExist(ClientContext cc, Web web)
        {
            ContentTypeCollection contentTypes = web.ContentTypes;
            cc.Load(contentTypes);
            cc.ExecuteQuery();

            foreach (var item in contentTypes)
            {
                if (item.StringId == "0X0100D45D35A5344C289A2E47ED187985326FB2")
                    return;           
                

            }

            // Create a Content Type Information object
            ContentTypeCreationInformation newCt = new ContentTypeCreationInformation();
            // Set the name for the content type
            newCt.Name = "Test KATS Ticket";
            //Inherit from oob document - 0x0101 and assign 
            newCt.Id = "0X0100D45D35A5344C289A2E47ED187985326FB2";
            // Set content type to be avaialble from specific group
            newCt.Group = "Test KATS Content Types";
            // Create the content type
            ContentType myContentType = contentTypes.Add(newCt);
            cc.ExecuteQuery();
        }


        private static void CreateSiteColumn(ClientContext cc, Web web)
        {
            // Add site column to the content type if it's not there...
            FieldCollection fields = web.Fields;
            cc.Load(fields);
            cc.ExecuteQuery();

            foreach (var item in fields)
            {
                if (item.InternalName == "ContosoString")
                    return;
            }

            string FieldAsXML = @"<Field ID='{4F34B2ED-9CFF-4900-B091-4C0033F89944}' 
                                            Name='TestEngagementName' 
                                            DisplayName='Test Engagement Name' 
                                            Type='Text' 
                                            Hidden='False' 
                                            Group='Test KATS Site Columns' 
                                            Description='Contoso Text Field' />";
            Field fld = fields.AddFieldAsXml(FieldAsXML, true, AddFieldOptions.DefaultValue);
            cc.Load(fields);
            cc.Load(fld);
            cc.ExecuteQuery();
        }

        private static void AddSiteColumnToContentType(ClientContext cc, Web web)
        {
            ContentTypeCollection contentTypes = web.ContentTypes;
            cc.Load(contentTypes);
            cc.ExecuteQuery();
            ContentType myContentType = contentTypes.GetById("0X0100D45D35A5344C289A2E47ED187985326FB2");
            cc.Load(myContentType);
            cc.ExecuteQuery();

            FieldCollection fields = web.Fields;
            Field fld = fields.GetByInternalNameOrTitle("TestEngagementName");
            cc.Load(fields);
            cc.Load(fld);
            cc.ExecuteQuery();

            FieldLinkCollection refFields = myContentType.FieldLinks;
            cc.Load(refFields);
            cc.ExecuteQuery();

            foreach (var item in refFields)
            {
                if (item.Name == "TestEngagementName")
                    return;
            }

            // ref does nt
            FieldLinkCreationInformation link = new FieldLinkCreationInformation();
            link.Field = fld;
            myContentType.FieldLinks.Add(link);
            myContentType.Update(true);
            cc.ExecuteQuery();
        }

       
        #region CONNECTIVITY METHODS

        static SecureString GetPassword()
        {
            SecureString sStrPwd = new SecureString();
            try
            {
                Console.Write("SharePoint Password : ");

                for (ConsoleKeyInfo keyInfo = Console.ReadKey(true); keyInfo.Key != ConsoleKey.Enter; keyInfo = Console.ReadKey(true))
                {
                    if (keyInfo.Key == ConsoleKey.Backspace)
                    {
                        if (sStrPwd.Length > 0)
                        {
                            sStrPwd.RemoveAt(sStrPwd.Length - 1);
                            Console.SetCursorPosition(Console.CursorLeft - 1, Console.CursorTop);
                            Console.Write(" ");
                            Console.SetCursorPosition(Console.CursorLeft - 1, Console.CursorTop);
                        }
                    }
                    else if (keyInfo.Key != ConsoleKey.Enter)
                    {
                        Console.Write("*");
                        sStrPwd.AppendChar(keyInfo.KeyChar);
                    }

                }
                Console.WriteLine("");
            }
            catch (Exception e)
            {
                sStrPwd = null;
                Console.WriteLine(e.Message);
            }

            return sStrPwd;
        }

        static string GetUserName()
        {
            string strUserName = string.Empty;
            try
            {
                Console.Write("SharePoint Username : ");
                strUserName = Console.ReadLine();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                strUserName = string.Empty;
            }
            return strUserName;
        }

        static string GetSite()
        {
            string siteUrl = string.Empty;
            try
            {
                Console.Write("Enter Site URL: ");
                siteUrl = Console.ReadLine();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                siteUrl = string.Empty;
            }
            return siteUrl;
        }

        private static string URLCombine(string baseUrl, string relativeUrl)
        {
            if (baseUrl.Length == 0)
                return relativeUrl;
            if (relativeUrl.Length == 0)
                return baseUrl;
            return string.Format("{0}/{1}", baseUrl.TrimEnd(new char[] { '/', '\\' }), relativeUrl.TrimStart(new char[] { '/', '\\' }));
        }
        #endregion
    }
}
