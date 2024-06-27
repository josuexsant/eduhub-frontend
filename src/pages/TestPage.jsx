import { Button } from "../components/Button";
import { MainLayout } from "../layouts/MainLayout";
import { Input } from "../components/Input";
import { CardImage } from "../components/CardImage";
import '../assets/angular.svg';

export const TestPage = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  }
  return (
    <MainLayout>

      {/*Buttons */}
      <h1 className="">Buttons</h1>
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
      



    </MainLayout>
  );
};
