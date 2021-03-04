import React from "react";
import { Link } from "gatsby";
import { Layout, Breadcrumb } from "antd";

const { Content } = Layout;

const card = {
  backgroudColor: "#234123",
  padding: 0,
  borderRadius: 25,
};
const siteLayoutContent = {
  minHeight: "280px",
  padding: "24px",
  background: "#fff",
};

// data en lien avec gatsby-node
const data = [
  {
    id: 1,
    nom:
      "HARRYS Pain de mie nature sans huile de palme sans croûte 20 tranches 500g",
    description: "PAIN DE MIE SANS CROÛTE",
    ingredient:
      "Farine de BLÉ 63%, eau, sucre, huile de colza, sel, vinaigre, levure, farine de fèves, gluten de BLÉ, arôme (contient alcool), extrait d'acérola. Peut contenir des traces d'OEUF, SOJA, LAIT, FRUITS A COQUE, GRAINES DE SÉSAM",
    img_url: "https://media.auchan.fr/MEDIASTEP59174831_512x512/B2CD/",
  },
  {
    id: 2,
    nom:
      "LE PORC DE NOS VILLAGE Terrine de campagne filière responsable Label Rouge 200g",
    description: "TERRINE DE CAMPAGNE LABEL ROUGE",
    ingredient:
      "Gorge de porc Label Rouge 30% (Origine France), foie    de porc Label Rouge 23% (Origine France) gras de porc Label Rouge    (Origine France), oignons, parure de poitrine de porc Label Rouge    (Origine France), OEUFS, sel, LAIT, épices et plantes aromatiques,fécule de pomme de terre",
    img_url: "https://media.auchan.fr/MEDIASTEP102229935_512x512/B2CD/",
  },
  {
    id: 3,
    nom:
      "HARRYS Pain de mie nature sans huile de palme sans croûte 20 tranches 500g",
    description: "PAIN DE MIE SANS CROÛTE",
    ingredient:
      "Farine de BLÉ 63%, eau, sucre, huile de colza, sel, vinaigre, levure, farine de fèves, gluten de BLÉ, arôme (contient alcool), extrait d'acérola. Peut contenir des traces d'OEUF, SOJA, LAIT, FRUITS A COQUE, GRAINES DE SÉSAM",
    img_url: "https://media.auchan.fr/MEDIASTEP59174831_512x512/B2CD/",
  },
];

function Projet1() {
  return (
    <Content style={{ padding: "0 50px" }} defKey="1">
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Projet 1</Breadcrumb.Item>
      </Breadcrumb>
      <div style={siteLayoutContent}>
        <Link to="/">retour page d 'acceuil </Link>

        <h1> Liste des produits</h1>

        <br />

        <ul>
          {data.map((data) => (
            <li key={data.id} style={card}>
              <h2>{data.nom}</h2>
              <img src={data.img_url} alt="" />
              <p>Desciption : {data.description}</p>
              <p>Ingrédients : {data.ingredient}</p>
            </li>
          ))}
        </ul>
      </div>
    </Content>
  );
}

export default Projet1;
