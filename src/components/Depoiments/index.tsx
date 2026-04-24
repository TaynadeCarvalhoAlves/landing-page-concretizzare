import { Author, Card, ContainerCards, ContainerMain, Description, Role } from "./style";


const depoiments = [
 {
    name: "Mariana Souza",
    role: "Arquiteta",
    message:
      "Estamos muito satisfeitos com o trabalho. Transformaram nossa visão em um espaço maravilhoso!",
  },
  {
    name: "Carlos Lima",
    role: "Engenheiro",
    message:
      "Equipe extremamente profissional. O resultado final ficou acima do esperado.",
  },
  {
    name: "Ana Oliveira",
    role: "Designer",
    message:
      "Atendimento excelente e muito cuidado com os detalhes. Recomendo muito!",
  },
  {
    name: "Fernanda Costa",
    role: "Cliente residencial",
    message:
      "Desde o início fomos muito bem atendidos. O projeto ficou incrível!",
  }
];

export default function Depoiments () {

    return (
        <ContainerMain id='feedback'>
            <ContainerCards>
                {depoiments.map((item, index) => (
                    <Card key={index}>
                        <Description>“{item.message}”</Description>

                    <Author>
                    — {item.name}
                    <Role>{item.role}</Role>
                    </Author>
                    </Card>
                ))}
            </ContainerCards>
    
        </ContainerMain>
    )
}