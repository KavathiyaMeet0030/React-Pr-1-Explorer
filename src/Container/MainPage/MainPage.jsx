import './MainPage.css'
import users from './data';
import Card from '../../Componets/card/Card';


const MainPage = () => {



    return (
        <div>

            <div className="Container">

                <div className="row">

                    <div className='col-12'>

                        <div className=' d-flex w-100 flex-wrap between'>

                            {/* card start */}

                            {
                                users.map((users) => {
                                    return (
                                        <>
                                            < Card 
                                               img={users.image}
                                               name={users.firstName}
                                               lname={users.lastName}
                                               miname={users.maidenName}
                                               email={users.email}
                                               phone={users.phone}
                                               dob={users.birthDate}
                                               address={users.address.address}
                                               city={users.address.city}
                                               state={users.address.state}
                                               code={users.address.postalCode}
                                            />
                                          
                                            

                                        </>
                                    )
                                })
                            }

                            {/* card end*/}

                            
                        </div>



                    </div>

                </div>


            </div>

        </div>
    );
};

export default MainPage;