import Input from "../../Input";
import "./style.css";

function Category({ handleChange }: any) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" defaultChecked={true} />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
          type="radio"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          type="radio"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          type="radio"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
          type="radio"
        />
      </div>
    </div>
  );
}

export default Category;