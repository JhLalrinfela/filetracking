import Form from "react-bootstrap/Form";

function LoginForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Enter User Id" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>
    </Form>
  );
}

export default LoginForm;
