import PaymentModal from './components/payhere';

function App() {
  return (
    <div className="App">
      <PaymentModal
        // Use a unique value for the orderId
        orderId={45896588}
        name="Just For You Mom Ribbon Cake"
        amount="4500"
      />
    </div>
  );
}

export default App;
