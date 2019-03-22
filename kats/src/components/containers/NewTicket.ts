import NewTicket from '../ui/NewTicket';
import { withRouter } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { addTicket, setTicketId } from '../../actions/ticket';
import ticketState from '../../initialState/requestState.json'
import { Ticket } from '../../models/Ticket';

const mapStateToProps = (state:Ticket) =>
({
    // ticket:state.ticket,
   
})

const mapDispatchToProps = dispatch =>
({
    onNewTicket(ticket:Ticket) {
        dispatch(
            addTicket(ticket)
        )
    },
    onChange(value) {
        if(value){
            dispatch(
                setTicketId(value)
            )
        }
    }
})

const Container = connect(mapStateToProps, mapDispatchToProps)(NewTicket)

export default withRouter (Container)

