import NewTicket from '../components/NewTicket';
import { withRouter } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux';
import { Ticket } from '../models/Ticket';
import { addTicket } from '../actions/ticket'


const mapStateToProps = (state,props) => 
     ({
        filter: props.params.filter,
        engagementType: state.engagementTypes.byEngagementTypeId,
        accountingFramework: state.accountingFrameworks.byAccountingFrameworkId,
        auditingStandard: state.auditingStandards.byAuditingStandardsId,
        category: state.category.byCategoryId,
        topic: state.topic.byTopicId,
        ticketType: state.ticketType.byTicketTypeId,
        status: state.status.byStatusId,
        

    })

   

const mapDispatchToProps = dispatch =>
({
    onNewTicket(ticket:Ticket) {
        dispatch(
            addTicket(ticket)
        )
    },
    // onChange(value) {
    //     if(value){
    //         dispatch(
    //             setTicketId(value)
    //         )
    //     }
    // }
})

const Container = connect(mapStateToProps,mapDispatchToProps)(NewTicket)

export default Container as React.ComponentClass<{}>;


