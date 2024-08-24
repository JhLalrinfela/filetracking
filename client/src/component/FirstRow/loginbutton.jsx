import Button from "react-bootstrap/Button";

function LoginButton() {
  return (
    <Button variant="success" data-bs-toggle="modal" data-bs-target="#myModal">
      Login
    </Button>
  );
}

function LogoutButton() {
  return <Button variant="success">Logout</Button>;
}

export { LoginButton, LogoutButton };
