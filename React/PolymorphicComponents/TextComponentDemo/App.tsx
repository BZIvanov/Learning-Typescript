import CustomText from "./components/CustomText";
import EmphasizedText from "./components/EmphasizedText";

const App = () => {
  return (
    <div>
      <CustomText>Default Props</CustomText>

      <CustomText as="h2">Valid html tag</CustomText>

      <CustomText as="a" href="https://google.com" target="_blank">
        Valid combination between html tag and attributes for the tag
      </CustomText>

      <div>
        <CustomText as={EmphasizedText}>
          Component is also valid for React.ElementType
        </CustomText>
      </div>
    </div>
  );
};

export default App;
