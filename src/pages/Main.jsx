import HeaderImage from "../components/HeaderImage";
import JollyButton from "../components/JollyButton";
import SectionTitle from "../components/SectionTitle";

const Main = ({onClick}) => {
  return (
    <>
    <HeaderImage />
    <div className="container mx-auto flex flex-col items-center py-5">
      <SectionTitle title="Come calcolare la RAL" />

      <div className="mt-16 w-3/4 flex flex-col items-start gap-2">
        <h4 className="text-2xl roboto-regular-italic">Che cos'è la RAL?</h4>
        <p className=" pt-3 roboto-regular">
          L’acronimo RAL indica la retribuzione annua lorda. Come si può
          facilmente intuire, indica il{" "}
          <strong>
            reddito annuo lordo che percepisce un lavoratore dipendente
          </strong>
          . Anche i lavoratori in{" "}
          <span className="text-red-600 underline me-1">somministrazione</span>
          possono calcolare la RAL, in base ai dati contenuti nel cedolino
          piuttosto che nel contratto di lavoro{" "}
          <strong>
            stipulato con l’
            <span className="text-red-600 underline">
              agenzia per il lavoro
            </span>
          </strong>
          , che figura come datore di lavoro formale. Il calcolo della RAL non è
          un’operazione complicata: per ottenere il risultato finale basta{" "}
          <strong>
            moltiplicare ogni retribuzione mensile lorda per il numero di
            mensilità fissate dal contratto
          </strong>
          . Significa che, se previste, vanno prese in considerazione anche la
          tredicesima e la quattordicesima.
        </p>
        <p>
          Lo <strong>stipendio lordo</strong> non comprende solo la retribuzione
          netta mensile, ma altre voci come:
        </p>
        <div>
          <ul className="list-disc ms-5 roboto-regular">
            <li>
              le <strong>ritenute fiscali</strong> e previdenziali destinate
              all’INPS;
            </li>
            <li>
              le <strong>trattenute IRPEF</strong>, secondo le aliquote previste
              dalla normativa in vigore.
            </li>
          </ul>
        </div>
        <p className="roboto-regular">
          Queste voci, per quanto concorrono a definire la retribuzione lorda,
          non vengono accreditate dal datore di lavoro sul conto corrente del
          lavoratore. Le prime infatti vengono versate all’INPS e permettono al
          lavoratore di accedere alle <strong>prestazioni previdenziali</strong>
          , come la
          <span className="text-red-600 underline ms-1">NASPI</span>, in caso di
          perdita del lavoro, o la{" "}
          <span className="text-red-600 underline me-1">pensione</span> finita
          la propria carriera. Quello che infatti viene accredito è lo stipendio
          netto mensile.
        </p>
      </div>

      <div className="mt-16">
        <JollyButton
          text="Calcola ORA!"
          primary="bg-slate-600"
          secondary="hover:bg-amber-500 text-white"
          onClick={onClick}
        />
      </div>
    </div>
    </>
  );
};

export default Main;
