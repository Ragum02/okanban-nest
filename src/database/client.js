import "dotenv/config";

import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.PG_URL, {
  // On va indiquer les champs à ajouter avec la bonne nomination
  define: {
    // On souhaite ajouter les champs created_at et updated_at automatiquement
    // pour chaque modèle qui héritera de la classe 'Model' de Sequelize
    timestamps: true,
    // On renomme ces champs afin qu'ils aient la même dénomination qu'en BDD
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});

// Petit tester de connexion à la BDD
try {
  // On essaie de s'authentifier via Sequelize
  await sequelize.authenticate();
  // Si cela fonctionne, je renvoie un message indiquant la réussite de l'opération
  console.log("Connection has been established successfully.");
} catch (error) {
  // Sinon, on indique qu'il n'est pas possible de se connecter et on renvoie l'erreur associée
  console.error("Unable to connect to the database:", error);
}

export default sequelize;
