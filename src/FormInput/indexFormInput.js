import { FormControl,FormGroup,FormLabel } from "react-bootstrap";

const FormInput = ({
    label,type,placeholder,onChange
}) => {
    const props = type === "textarea" ? {as:type}:{type}

    return(
        <FormGroup className="mb-3">
            <FormLabel>{label}</FormLabel>
                <FormControl
                    {...props}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                ></FormControl>
        </FormGroup>
    )
}

export default FormInput;