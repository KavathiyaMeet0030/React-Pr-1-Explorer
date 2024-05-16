
const Card = ({img,name,email,phone,dob,address,city,state,code,miname,lname}) => {
    return (
        <>
            <div className="col-4 b-5 m-3">

                <div className='d-flex'>

                    <div className='UserImage w-50 p-2'>

                        <div className='image'>
                            <img src={img} alt="UserImage" className='w-100' />
                        </div>


                    </div>

                    <div className='UserDetails w-50'>

                        <div className='details'>
                            <h2>{name}</h2>
                            <br />
                            <br />
                            <h2>{email}</h2>

                        </div>

                    </div>


                </div>

                <div className='OtherDetalis'>

                    <div className='p-2'>
                        <b>Full Name :-</b> {name} {lname} {miname}
                    </div>

                    <div className='p-2'>
                        <b>Contact :- </b> {phone}
                    </div>

                    <div className='p-2'>
                        <b>Date Of Birth :- </b> {dob}
                    </div>

                    <div className='p-2'>
                        <b>Address :-</b> {address} , {city} , {state} - {code}
                    </div>

                </div>

            </div>
        </>
    );
};

export default Card;