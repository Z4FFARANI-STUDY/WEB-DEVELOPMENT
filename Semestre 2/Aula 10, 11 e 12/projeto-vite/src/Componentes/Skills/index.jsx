import Card from "../Card";

export default function Skills({ skills }) {
  
  // Declarando um objeto:
  const habilidades = [
    {
      titulo: "Node",
      nivel: "Noob",
      tempoxp: "1 dia",
      color: "blue"
    },
    {
      titulo: "Props",
      nivel: "Senior",
      tempoxp: "30 minutos",
      color: "red"
    },
    {
      titulo: "Python",
      nivel: "Jesus",
      tempoxp: "2016 anos",
      color: "green"
    }
  ]

  return (
    <div className="skills">
      <h2>Habilidades</h2>
        <Card data={habilidades} />
    </div>
  );
}


