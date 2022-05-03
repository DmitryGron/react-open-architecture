import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { EnhPerson } from "../components/Person";
import { PersonStore } from "../stores/person_store";

export type FirstScreenProps = {
  store: PersonStore;
};
const FirstScreen = ({ store }: FirstScreenProps) => {
  useEffect(() => {
    store.getPerson();
  }, [store]);

  return (
    <>
      <EnhPerson
        person={store.data}
        fetching={store.fetching}
        error={store.error}
      />
    </>
  );
};

const ObservedFirstScreen = observer(FirstScreen);

export { ObservedFirstScreen as FirstScreen };
