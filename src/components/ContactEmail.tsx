// Template do email: organiza a aparÊncia do email
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
} from "@react-email/components";

type ContactEmailProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactEmail({
  name,
  email,
  subject,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />

      <Body>
        <Container>
          <Heading>
            Nova mensagem do portfólio
          </Heading>

          <Text>
            <strong>Nome:</strong> {name}
          </Text>

          <Text>
            <strong>E-mail:</strong> {email}
          </Text>

          <Text>
            <strong>Assunto:</strong> {subject}
          </Text>

          <Text>
            <strong>Mensagem:</strong>
          </Text>

          <Text>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}