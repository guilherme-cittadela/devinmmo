import { Btn } from "./Button-styles"

export const Button = ({src, content, target}) =>{
    return(
        <>  <Btn>
            <div>
                <a href={src} target={target} >{content}</a>
            </div>
            </Btn>
        </>
    )
}