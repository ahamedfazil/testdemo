import NewTicket from '../components/NewTicket';
import { withRouter } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Ticket } from '../models/Ticket';
import { engagementTypes } from '../reducers/dictionary';
import { addTicket } from '../actions/ticket'


const mapStateToProps = (state,props) => 
     ({
        ticket: state.allTickets,
        filter: props.params.filter,
        engagementType: state.engagementTypes.byId,
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

export default withRouter (Container)

