import React from "react";
import assai from "./Assets/assai.png";
import carrefour from "./Assets/Carrefour.jpg";
import sam from "./Assets/sam.png";
import atacadao from "./Assets/atacadao.jpg";
import redemix from "./Assets/redemix.jpg";
import hiperideal from "./Assets/hiperieal.jpg";
import "./Parceiros.css"

const Parceiros = () => {
    const mercados = [
      {
        
        image: assai,
        title: "Assai",
        text: <div className="assai"><p>Assaí Atacadista é uma empresa brasileira de atacarejo que atende pequenos e médios comerciantes.Com uma proposta de oferecer preços competitivos e uma ampla gama de produtos,
         o Assaí se tornou uma escolha popular para quem busca fazer compras em grande quantidade e economizar.</p></div>,
      },
      {
        image: carrefour,
        title: "carrefour",
        text: <div className="carrefur"><p>O Carrefour é uma rede de supermercados e hipermercados que oferece uma variedade de produtos, desde alimentos até eletrodomésticos, 
          móveis e eletrônicos. O Grupo Carrefour se tornou o maior varejista alimentar do país</p></div>,
      },
      {
        image: sam,
        title: "Sams",
        text: <div className="sams">O Sam’s Club é uma rede de clubes de compras que oferece produtos exclusivos,
         nacionais e importados. Tudo isso com preços exclusivos para os membros. Se você ainda não é sócio, pode se cadastrar e aproveitar todas as vantagens dessa rede de compras</div>,
      },
      {
        image: atacadao,
        title: "Atacadão",
        text: <div className="atacadao">O Atacadão é uma rede brasileira de supermercados atacado-varejista, pertencente ao Grupo Carrefour Brasil. Com presença em mais de 200 cidades
         distribuídas por todos os estados do Brasil, o Atacadão é líder no segmento de atacarejo (cash & carry) e está em rápida expansão.</div>,
      },
      {
        image: redemix,
        title: "Redemix",
        text: <div className="redemix">O RedeMix é um supermercado que oferece uma variedade de produtos, desde bebidas e alimentos até itens de higiene e limpeza. Compras
         online são possíveis, e os clientes podem receber os produtos em casa com comodidade e segurança. </div>,
      },
      {
        image: hiperideal,
        title: "Hiperideal",
        text: <div className="aa">Hiperideal é uma rede de supermercados que oferece uma combinação de preço baixo, variedade, qualidade e praticidade.  Com mais de 20 mil itens disponíveis, 
        grande variedade de marcas e um ambiente confortável. </div>,
      },
    ]
    return (
        <div className="work-section-wrapper">
          <div className="work-section-top">
            <h1 className="primary-heading">Nossos Parceiros</h1> 
          </div> 
          <div className="work-section-bottom">
            {mercados.map((data) => (
              <div className="work-section-info" key={data.title}>
                <div className="info-boxes-img-container">
                  <img src={data.image} alt="" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

    export default Parceiros
