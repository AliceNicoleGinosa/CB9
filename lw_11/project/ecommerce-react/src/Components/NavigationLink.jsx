const NavigationLink = ({ href, HandleClick, text }) => {
  return (
    <li className="navigation-link" onClick={HandleClick}>
      <a href={href}>{text}</a>
    </li>
  );
};

export default NavigationLink;
