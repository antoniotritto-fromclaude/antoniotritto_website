// Inserisce nella pagina i "dati strutturati" (schema.org) che aiutano Google
// a capire chi è l'autore del sito, cos'è il libro, cos'è il podcast.
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Il carattere "<" viene neutralizzato per evitare che il contenuto
      // possa chiudere in anticipo il tag script.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
