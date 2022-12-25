import React, { useEffect, useState } from "react";
import {Form,Button} from "react-bootstrap";
import FormInput from "../FormInput/indexFormInput"
import { StyledContainer} from "./styles"
import useLoginState from "./useLoginState";

const FORM_LIST = [
    {   label: "Username",
        type: "text",
        placeholder: "Enter your UserName"
    },

    {   label: "Password",
        type: "password",
        placeholder: "Enter your Password"
    },
]

const dummyDB = {
    username: "root",
    password: "admin"
}

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 3000));
  }

const LoginPage = ({className,onLoginEvent}) =>{
    const {getter,setter} = useLoginState();
    const [emptyUser,setEmptyUser] = useState(null);
    const [emptyPass,setEmptyPass] = useState(null);
    const [invalidUser,setInvalidUser] = useState(null);
    const [invalidPass,setInvalidPass] = useState(null);
    
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
          simulateNetworkRequest().then(() => {
            setLoading(false);
          });
        }
      }, [isLoading]);

    // const handleClick = () => setLoading(true);


    // useEffect(()=>console.log(getter),getter)
    // use effect utk debugging
    return(
        <StyledContainer className = {className}>
            <Form onSubmit={(e) => {
                //mencegah halaman refresh
                e.preventDefault()
                setLoading(true)
                if(getter[0] == ""){
                    setEmptyUser(true)
                }else if(getter[0] != dummyDB.username){
                    setInvalidUser(true)
                }

                if(getter[1] == ""){
                    setEmptyPass(true)
                } else if(getter[1] != dummyDB.password){
                    setInvalidPass(true)
                }

                if(getter[0] == dummyDB.username && getter[1] == dummyDB.password
                    ){
                        return onLoginEvent({getter})
                    } else {
                        console.log("gagal")
                    }
                console.log(getter[0],dummyDB.username,getter[1],dummyDB.password)
            }}>
                {
                    FORM_LIST.map((item,index) => (
                        <div>
                            <FormInput
                            label={item.label}
                            type={item.type}
                            value={getter[index]}
                            onChange={
                                e=>setter[index](e.target.value)
                            }
                            placeholder={item.placeholder}
                            />
                            {(emptyUser && item.label == "Username" ) && <p className="text-danger"> username required</p>}

                            {/* {(invalidUser && item.label == "Username" ) && <p className="text-danger"> username Invalid</p>} */}

                            {(emptyPass && item.label == "Password" ) && <p className="text-danger"> password required</p>}

                            {/* {(invalidPass && item.label == "Password" ) && <p className="text-danger"> password Invalid</p>} */}

                            {(invalidPass && invalidUser ) && <p className="text-danger"> Login Invalid</p>}
                        </div>
                        
                    ))
                }
                <Button 
                    type="submit"
                    variant="success"
                    disabled={isLoading}
                    // onClick={!isLoading ? handleClick : null}
                    >
                        {isLoading ? 'Loading…' : 'Login'}
                </Button>
            </Form>
        </StyledContainer>
    )
}

export default LoginPage;