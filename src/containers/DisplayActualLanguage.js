import React, { useContext, useMemo } from 'react';
import { connect } from 'react-redux';
import { changeConst, changePred, changeFun } from '../actions';
import LogicContext from '../components/LogicContext'

const DisplayLanguage = ({ language, changeConst, changePred, changeFun }) => {
  const context = useContext(LogicContext);

  useMemo(() => context?.constantsExpr && changeConst(context.constantsExpr), [context?.constantsExpr])
  useMemo(() => context?.functionsExpr && changeFun(context.functionsExpr), [context?.functionsExpr])
  useMemo(() => context?.predicatesExpr && changePred(context.predicatesExpr), [context?.predicatesExpr])

  return (
    <div className="mt-2">
      <h2>Language</h2>
      <div className='pl-3'>
        <p><span>𝓒<sub>𝓛</sub> = &#123;</span> {language.consts.symbols.join(', ')} &#125; <br />
        <span>𝓟<sub>𝓛</sub> = &#123;</span> {language.preds.symbols.map(tuple => tuple.name + '/' + tuple.arity).join(', ')} &#125; <br />
        <span>𝓕<sub>𝓛</sub> = &#123;</span> {language.funs.symbols.map(tuple => tuple.name + '/' + tuple.arity).join(', ')} &#125;</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  language: state.present.language
})
const mapDispatchToProps = ({
  changeConst,
  changePred,
  changeFun
})
const DisplayActualLanguage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DisplayLanguage)

export default DisplayActualLanguage