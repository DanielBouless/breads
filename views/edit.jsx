const React = require("react");
const Default = require("./layouts/default");

function Edit({ bread }) {
  return (
    <Default>
      <h2>Edit a bread</h2>
      <form action={`/breads/${bread.id}?_method=PUT`} method="POST">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          defaultValue={bread.name}
        ></input>
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          id="image"
          defaultValue={bread.image}
        ></input>
        <label htmlFor="hasGluten">Has Gluten?</label>
        <input
          type="checkbox"
          name="hasGluten"
          id="hasGluten"
          defaultChecked={bread.hasGluten}
        ></input>
        <select name="baker" id="baker" defaultValue={bread.baker}>
          <option value="Rachel">Rachel</option>
          <option value="Monica">Monica</option>
          <option value="Joey">Joey</option>
          <option value="Chandler">Chandler</option>
          <option value="Ross">Ross</option>
          <option value="Phoebe">Phoebe</option>
        </select>
        <input type="submit"></input>
      </form>
    </Default>
  );
}

module.exports = Edit;
