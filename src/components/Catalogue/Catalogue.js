import { SingleGameCatalogue } from "../../SingleGameCatalogue/SingleGameCatalogue";
export const Catalogue = ({ games }) => {
  return (
    <div>
      {" "}
      <section id="catalog-page">
        <h1>All Games</h1>
        {/* Display div: with information about every game (if any) */}
        {games.length > 0 ? (
          games.map((x) => <SingleGameCatalogue key={x._id} games={x} />)
        ) : (
          <h3 className="no-articles">No articles yet</h3>
        )}
      </section>
    </div>
  );
};
