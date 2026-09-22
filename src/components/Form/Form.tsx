import style from "./Form.module.css";

export default function Form() {
  return (
    <div className={style.form_container}>
      <h3>Seu nome</h3>
      <input type="text" placeholder="Ex.: Maria Silva" required/>
      <h3>Seu E-mail</h3>
      <input type="email" placeholder="Ex.: maria@email.com" required/>
      <h3>Assunto</h3>
      <input list="subjects" id="subject" name="subject" />
      <datalist id="subjects">
        <option value="Proposta de Projeto"></option>
        <option value="Oportunidade de Trabalho"></option>
        <option value="Dúvida/Outro"></option>
      </datalist>
      <h3>Sua Mensagem</h3>
      <textarea placeholder="Descreva os detalhes da sua ideia ou oportunidade" rows={5}></textarea>
      <button className={style.btn}>Enviar</button>
    </div>
  );
}
