import { Welcome } from "./Welcome";
import { Button } from "./Button";
import { Hello, HelloWithoutJSX } from "./Hello";
import "./App.css";
import { Card, CardWithoutJSX } from "./Card";
import { UserProfile } from "./UserProfile";
import { ContactForm } from "./ContactForm";
import { StyledForm } from "./StyledForm";
import { CandidateProfile } from "./CandidateProfile";
import { Hedy } from "./Hedy";
import { Product } from "./Product";
import { Greeting } from "./Greeting";
import { UserCard } from "./UserCard";
import { CardWrapper } from "./CardWrapper";
import { UserDetails } from "./UserDetails";
import { ProductList } from "./ProductList";
import { NameList } from "./NameList";
import { Alert } from "./Alert";
import { NewButton } from "./NewButton";
import { CustomButton } from "./CustomButton";
import { Contact } from "./Contact";
import { Newsletter } from "./Newsletter";
import { Menu } from "./Menu";
import { Counter } from "./Counter";
import { LoginCard } from "./LoginCard";
import { UserDashboard } from "./UserDashboard";
import { SimpleCounter } from "./SimpleCounter";
import { PrevStateCounter } from "./PrevStateCounter";
import { BatchingCounter } from "./BatchingCounter";
import { Gallery } from "./Gallery";
import { TodoList } from "./TodoList";
import { ShoppingCart } from "./ShoppingCart";
import { CounterWithReducer } from "./CounterWithReducer";
import { ShoppingCartWithReducer } from "./ShoppingCartWithReducer";
import { CounterWithInit } from "./CounterWithInit";
import { CustomCounter } from "./CustomCounter";

function App() {
  return (
    <div>
      <CustomCounter />
      {/* <CounterWithInit /> */}
      {/* <ShoppingCartWithReducer /> */}
      {/* <CounterWithReducer /> */}
      {/* <ShoppingCart />
      <TodoList />
      <UserProfile />
      <Gallery />
      <BatchingCounter /> */}
      {/* <PrevStateCounter /> */}
      {/* <SimpleCounter /> */}
      {/* <UserDashboard isPremium={true} />
      <LoginCard />
      <LoginCard /> */}
      {/* <Counter /> */}
      {/* <Counter /> */}
      {/* <Menu />
      <Contact />
      <Newsletter />
      <CustomButton text={"Deep"} />
      <Alert>Your changes have been saved!</Alert>
      <Alert type={"error"}>Something went wrong!</Alert>
      <NewButton />
      <Hello />
      <UserDetails
        name="Bruce Wayne"
        isOnline={true}
        isPremium={true}
        isNewUser={true}
        role={"admin"}
      />
      <UserDetails
        name="Clark Kent"
        isOnline={true}
        hideOffline={true}
        role={"vip"}
      />
      <ProductList />
      <NameList />
      <CardWrapper>
        <p>Bruce Wayne</p>
        <p>brucewayne@jl.com</p>
        <button>Edit profile</button>
      </CardWrapper> */}
      {/* <UserProfile /> */}
      {/* <ContactForm />
      <StyledForm />
      <CandidateProfile />
      <Welcome name="Clark" alias="Superman" />
      <Welcome name="Bruce" alias="Batman" />
      <Welcome name="Diana" alias="Wonder Woman" />
      <Product
        title="Gaming laptop"
        price={1299.99}
        inStock={true}
        categories={["Electronics", "Computers", "Gaming"]}
      />
      <Card />
      <UserCard
        id="1"
        name="Tony"
        age={44}
        city={"New York"}
        email={"tonystark@starkindustries.com"}
      />
      <Greeting name="Deep" message="Hello" />
      <Greeting name="Bruce" />
      <Greeting message="Welcome" />
      <Greeting />
      <Button />
      <Hedy /> */}
    </div>
  );
}

export default App;
