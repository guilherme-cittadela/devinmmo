import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Btn } from '../Button/Button-styles'
import { Input, TextArea } from '../Games/GameList/GameList-styles'
import { FormInputs, FormBox } from './Form-styles'

export const Forms = () => {
    const handleSubmit = (values, {setSubmitting}) => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
    }

    const schema = Yup.object().shape({

        name: Yup.string().required()
    })
    return(
            <FormBox>
                <div>
                    <h1>Form</h1>
                    <Formik 
                    initialValues={{email: ''}} 
                    onSubmit={handleSubmit} 
                    validationSchema={schema}
                    >
                        {({isSubmitting, resetForm, isValid}) => (
                                <Form>
                                    <FormInputs>
                                        <label>E-mail</label>
                                        <Field 
                                        name="email" 
                                        placeholder="E-mail" 
                                        component={Input}
                                        />
                                        <ErrorMessage 
                                            name="email"
                                            style={{ color: '#ff3333', fontSize: '15px' }}
                                            component="span"/>
                                    </FormInputs>

                                    <FormInputs>
                                        <label>Name</label>
                                        <Field 
                                        name="name" 
                                        placeholder="Name" 
                                        type="text"
                                        component={Input}
                                        />
                                        <ErrorMessage
                                            name="name"
                                            style={{ color: '#ff3333', fontSize: '15px' }}
                                            component="span"/>
                                    </FormInputs>

                                    <FormInputs>
                                        <label>Comment</label>
                                        <Field 
                                        name="comment" 
                                        placeholder="Comment" 
                                        type="text"
                                        component={Input}
                                        />
                                    </FormInputs>


                                    <Btn 
                                    type='submit'
                                    disabled={isSubmitting || !isValid }
                                    onClick={handleSubmit}
                                    >Submit</Btn>
                                </Form>
                        )}
                    </Formik>
                </div>
            </FormBox>
    )
}