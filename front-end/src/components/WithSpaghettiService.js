import React, { useEffect, useState } from "react";
import Pivo from "@evolvable-by-design/pivo";

import { baseUrl, SpaghettiService } from './SpaghettiService';

const defaultHttpConfig = { headers: { 'Content-Type': 'application/json' } }

const withSpaghettiService = (Component) => (props) => {
  const [pivo, setPivo] = useState();

  useEffect(() => {
    Pivo.fetchDocumentationAndCreate(baseUrl, 'OPTIONS', defaultHttpConfig).then(setPivo);
  }, [])

  if (pivo !== undefined) {
    return <Component spaghettiService={new SpaghettiService(pivo)} {...props} />
  } else {
    return <p>Loading...</p>
  }
};

export default withSpaghettiService