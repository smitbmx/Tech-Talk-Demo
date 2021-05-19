import React, { Component } from "react";

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { workers: data }
  }
}

const Workers = ({ workers }) => {
  console.log(workers)

  return (
    <div>
      <h2>All Workers</h2>
      {workers.map(worker => (
        <div key={worker.id}>
          <a>
            <h4>Name: { worker.name }</h4>
            <h4>Name: { worker.email }</h4>
            <h4>Name: { worker.address.city }</h4>
          </a>
          <br />
        </div>
      ))}
    </div>
  );
}
 
export default Workers;