import React from "react";
import PropTypes from 'prop-types';

const Tabs = ({
  tabsData,
  currentTabIndex,
  onChange,
}) => {
  const handleCurrentTabChange = (evt) => {
    onChange(evt);
  };

  return (
    <fieldset className="services__tabs tabs" onChange={handleCurrentTabChange}>
      {tabsData.map(({
        name,
        title,
        id,
      }, i) => (
        <p className="tabs__paragraph" key={id}>
          <input className="tabs__input visually-hidden" type="radio" name="tab"
            value={name} id={id} defaultChecked={i === currentTabIndex} />
          <label className={`tabs__label tabs__label--${name}`} htmlFor={id}>{title}</label>
        </p>))}
    </fieldset>
  );
};

Tabs.propTypes = {
  tabsData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })),
  currentTabIndex: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Tabs;
