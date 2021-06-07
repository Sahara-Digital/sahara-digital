import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container, Form, Row } from 'react-bootstrap';
import { Button } from '../button/index';
import styled from 'styled-components';

const ContactForm: React.FunctionComponent = () => {
    const [state, handleSubmit] = useForm('xeqrpklj');
    if (state.succeeded) {
        return <ContactForm />;
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormContainer>
                <Form.Label htmlFor="email">Email Address</Form.Label>
                <Row>
                    <Input id="email" type="email" name="email" />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </Row>
                <Form.Label htmlFor="email">Message</Form.Label>
                <Row>
                    <TextArea
                        as="textarea"
                        rows={3}
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </Row>
                <Button
                    variant="primary"
                    type="submit"
                    disabled={state.submitting}
                >
                    Submit
                </Button>
            </FormContainer>
        </Form>
    );
};

export default ContactForm;

const FormContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TextArea = styled(Form.Control)`
    min-width: 300px;
    min-height: 100px;
    margin: 0.5rem;
    padding-left: 10px;
    padding-top: 10px;
`;

const Input = styled.input`
    min-width: 300px;
    min-height: 30px;
    margin: 0.5rem;
    padding-left: 10px;
`;
