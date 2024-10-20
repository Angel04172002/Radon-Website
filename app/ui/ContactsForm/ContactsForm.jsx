import { Button } from '../button';
import './ContactsForm.css';


export default function ContactsForm() {


    return (


        <div className="form-container">

            <h1 className="contacts-title text-center">Свържете се с нас</h1>


            <form className="contacts-form" method="post">

                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="firstNameInput">
                            Име
                        </label>
                        <input
                            className="form-control"
                            aria-required="true"
                            id="firstNameInput"
                        />

                    </div>
                </div>


                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="lastNameInput">
                            Фамилия
                        </label>
                        <input

                            className="form-control"
                            aria-required="true"
                            id="lastNameInput"
                        />

                    </div>
                </div>


                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="companyName">
                            Име на компания
                        </label>
                        <input

                            className="form-control"
                            aria-required="true"
                            id="companyName"
                        />

                    </div>
                </div>


                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="companyEmail">
                            Имейл на компания
                        </label>
                        <input

                            className="form-control"
                            aria-required="true"
                            id="companyEmail"
                        />

                    </div>
                </div>


                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="phoneNumber">
                            Телефон
                        </label>
                        <input

                            className="form-control"
                            aria-required="true"
                            id="phoneNumber"
                        />

                    </div>
                </div>


                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="otherInfo">
                            Искате ли да споделите друга информация за вашия проект или да зададете въпроси?
                        </label>
                        <textarea

                            className="form-control"
                            aria-required="true"
                            id="otherInfo"

                        />

                    </div>
                </div>



                <div className="row mb-3 justify-content-center">
                    <div className="col-md-8">

                        <button
                            type="submit"
                            className="w-100 btn submit-btn btn-primary"
                        >
                            Изпрати
                        </button>

                    </div>
                </div>
          
            </form>
       
        </div>


    );
}

