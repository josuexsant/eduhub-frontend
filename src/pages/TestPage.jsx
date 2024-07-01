import { Button } from "../components/Button";
import { MainLayout } from "../layouts/MainLayout";
import { Input } from "../components/Input";
import { CardImage } from "../components/CardImage";
import '../assets/angular.svg';
import { CardForm } from "../components/CardForm";
import { CardEmpty } from "../components/CardEmpty";

export const TestPage = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  }
  return (
    <MainLayout>

      {/*Buttons */}

      <h2>Buttons</h2>
      <hr />
      <div className="inline-flex space-x-4">
        <Button className="btn-1" handleClick={handleClick}>btn-1</Button>
        <Button className="btn-2">btn-2</Button>
        <Button className="btn-3">btn-3</Button>
        <Button className="btn-4">btn-4</Button>
        <Button className="btn-5">btn-5</Button>
        <Button className="btn-6">btn-6</Button>
      </div>
      <br />
      <hr />
      <br />

      {/*Inputs */}
      <h1>Inputs</h1>
      <hr />
      <Input type="" placeholder="Escribe algo" className="input" />

      {/* Cards */}
      <h1>Cards</h1>
      <CardImage handleClick={handleClick} svg={''} />
      <br />
      <CardForm>
        <label htmlFor="">Texto</label>
        <Input type="" placeholderfwb="Escribe algo" className="input" /> <br />
        <Button className="btn-1" handleClick={handleClick}>btn-1</Button>
      </CardForm>

      <br />

      <CardEmpty color="card-3 ml-5">
        <p>Texto</p>
        <p>Texto</p>
        <p>Texto</p>
      </CardEmpty>
      



    </MainLayout>
  );
};

export default TestPage;