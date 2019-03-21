import NewTicket from '../ui/NewTicket'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import * as A from '../../actions'
import { addTicket, setTicketId } from '../../actions/ticket'
import { Ticket } from '../../models/Ticket';

const mapStateToProps = (state,props) =>
({
    ticket:state.ticket,
    router:props.router
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

