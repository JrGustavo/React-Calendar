import Modal from 'react-modal'
import {useState} from "react";
import {addHours} from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
}

Modal.setAppElement('#root');

export const CalendarModal = () => {

        const [isOpen, setIsOpen] = useState(true)
        const [formValues, setFormValues] = useState({
        title: 'Gustavo',
        notes: 'Alvarado',
        start: new Date(),
        end: addHours(new Date(), 2)

    })

    const onInputChanged = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onDateChanged = (event, changing)   => {
        setFormValues({
            ...formValues,
            [changing]: event
        })

    }

    const onCloseModal = () => {
        console.log('cerrando modal')
        setIsOpen(false)

    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}

        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container">

       

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DatePicker
                      selected={formValues.start}
                      onChanged={(event) => onDateChanged(event, 'start' ) }
                      className="form-control"
                      dateFormat="Pp"

                      showMonthYearDropdown/>
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DatePicker
                        minDate={formValues.start}
                      selected={formValues.end}
                      onChanged={(event) => onDateChanged(event, 'end' ) }
                      className="form-control"
                      dateFormat="Pp"

                     showMonthYearDropdown/>
                      </div>

                <hr/>


                <div className="form-group mb-2">
                    <label>Titulos y notas</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={formValues.title}
                        onChange={onInputChanged}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={formValues.notes}
                        onChange={onInputChanged}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>

         </Modal>

    )
}
