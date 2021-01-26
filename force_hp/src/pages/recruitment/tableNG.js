import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./table.scss"

const TableNG = () => {

    // queryの取得処理を追加
  const data = useStaticQuery(graphql`
  query  {
    allContentfulNewGraduate(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          reqNumEn
          reqNumSp
          reqQual {
            reqQual
          }
          bisContentEn {
            bisContentEn
          }
          bisContentSp {
            bisContentSp
          }
          treatment {
            treatment
          }
        }
      }
    }
  }
`)

  const number =  data.allContentfulNewGraduate.edges

    return (
        <div>
          {number.map(({ node }) => (
            <table border="2" width="70%" cellPadding="10"className="tablePosition">

                <tr>
                    <th width="20%" bgcolor="lightgreen">募集職種</th>
                    <th width="40%">エンジニア職</th>
                    <th width="40%">ITサポート職</th>
                </tr>
                <tr>
                    <th bgcolor="lightgreen">募集人数</th>
                    
                    
                        <th>{node.reqNumEn}</th>
                    
                    
                        <th>{node.reqNumSp}</th>
                    

                </tr>
                <tr>
                    <th bgcolor="lightgreen">応募資格</th>
                    
                        <th colSpan="2">{node.reqQual.reqQual}</th>
                    
                    
                </tr>
                <tr>
                    <th bgcolor="lightgreen">業務内容</th>
                    
                        <th>{node.bisContentEn.bisContentEn}</th>
                    
                        <th>{node.bisContentSp.bisContentSp}</th>
                </tr>
                <tr>
                    <th bgcolor="lightgreen">待遇</th>
                    <th colSpan="2">{node.treatment.treatment}</th>
                </tr>
            </table>
            ))}
        </div>
    )
}



export default TableNG;