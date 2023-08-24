import { useState } from "preact/hooks";
import { useForm } from "react-hook-form";

export const NewIngredient = () => {
  const [ingredients, setIngredients] = useState<
    { name: string; price: number }[]
  >([]);
  console.log(setIngredients, ingredients);
  const { handleSubmit, register } = useForm();
  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <p>title</p>
      <div className={"flex flex-col"}>
        <div>
          <label>ingrediente</label>
          <br />
          <input {...register("name", { required: true })} />
        </div>
        <div>
          <label>precio $</label>

          <br />
          <input
            {...register("price", {
              _required: true,
              get required() {
                return this._required;
              },
              set required(value) {
                this._required = value;
              },
            })}
          />
        </div>
        <div>
          <label>medida</label>
          <br />
          <input {...register("amount", { required: true })} />
        </div>
      </div>
      <button type={"submit"}>guardar</button>
    </form>
  );
};
