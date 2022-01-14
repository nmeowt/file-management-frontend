export default ({ children }) => (<div className="wrapper">
  <style jsx>{`
    .wrapper {
        display: flex;
        flex-flow: row wrap;
        margin-left: -8px;
        margin-right: -8px;
        row-gap: 16px;
    }
  `}</style>
  {children}
</div>)