import styled from "styled-components";

const ButtonsContainer = styled.div<{nameError? : any}>`
width:100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
// margin-top: 16px;
border: ${(props) => props.nameError ? '1px solid red' : 'transparent'};
border-radius: 20px;
`;

const ButtonWrapper = styled.div`
// border:1px solid yellow;

label {
    position:relative;
    // border:1px solid green;
}

input {
    appearance:none;
    cursor: pointer;
    width:30px;
    height:30px;
    background-color:#0D99FF;
    border-radius:50%;
    position:relative;

    &:hover{
         background-color: #9D99AA;
          & + div {
        color:#FFFFFF;
         }
}

    &:checked{
        background-color: #9D99AA;
        & + div {
            color:#FFFFFF;
        }
}

        & + div:hover{
         background-color:  #9D99AA;
         color:#FFFFFF;
}
}

div {
position:absolute;
cursor: pointer;
top:0%;
left:53%;
transform: translate(-50%, -50%);
display:block;
// border:1px solid green;
width:30px;
height:30px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;


input:hover ~ div {
    color: #fff;
  }

  input:checked ~ div {
    color: #fff;
  }
}
`;

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type FormButtonsProps = {
    nameError:any;
    name: string;
    value: number;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    id?: string;
};

const FormButtons = ({nameError, name, value, handleChange}: FormButtonsProps) => {
    
    return (
        <ButtonsContainer nameError={nameError} >
            {numberArray.map((number) =>
            (<ButtonWrapper key={`${name}-${number}`}>
                <label>
                    <input name={`${name}`} type="radio" checked={number === value} value={number} onChange={handleChange}/>
                    <div>{number}</div>
                </label>
            </ButtonWrapper>
            )
            )}

        </ButtonsContainer>
    )
}

export default FormButtons;