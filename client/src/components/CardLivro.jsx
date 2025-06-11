import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Importando o hook useInserirusuario
import { useDeletaLivro } from "../hooks/useLivro";

const CardLivro = (props) => {
  // importanto a funcao de deletar produto
  const { deletarLivro } = useDeletaLivro();

  // Funcao para requisitar a exclusao do produto
  const handleDelete = async () => {
    // Deletando produto utilizando o hook de deletar produto
    // passando o id do produto específico
    const deletado = await deletarLivro(props.id);
    alert(`Livro ${deletado.titulo} deletado com sucesso!`);
    window.location.reload(); // Atualiza a página após a exclusão
  };

  return (
    <Card border="primary" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text>
          <b> Título:</b> <br /> {props.titulo}
        </Card.Text>
        <Card.Text>
          <b> Autor: </b> {props.autor}
        </Card.Text>
        <Card.Text>
          <b> Gênero: </b> {props.genero}
        </Card.Text>
        <Card.Text>
          <b> Dono: </b> {props.usuario}
        </Card.Text>
        <Button
          size="lg"
          variant="primary"
          type="button"
          href={`/editalivro/${props.id}`}
          className="me-3"
        >
          Editar
        </Button>
        <Button size="lg" variant="danger" type="button" onClick={handleDelete}>
          Excluir
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardLivro;
