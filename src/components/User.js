import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends, address }) {
   // early return ile duruma göre check edip render işlemimizi yapıyoruz
    if(!isLoggedIn){
        return <div>Lütfen Giriş Yapınız</div>
    }
  return (
    <>
      <h1>
        { `${name} ${surname} (${age})`}
      </h1>
      {address.title} {address.zip}
      <br />
      <br />
      {friends && friends.map((friend, index) => (
        <div key={index}>
          {index} - {friend}
        </div>
      ))}
    </>
  );
}
// propType'larımız ve onlardan hangilerinin zorunlu olduklarını belirledik
// birden fazla proptypes kullancaksak aşşağıdaki age gibi --oneOfType-- kullanarak bunu gerçekleştirebiliriz.
User.propTypes ={
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    friends: PropTypes.array,
    address : PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}
// default props eğer ataması olmayan bir props varsa onları default olarak düzenlememizi sağlar.
User.defaultProps = {
    isLoggedIn: false,
} 
export default User;
