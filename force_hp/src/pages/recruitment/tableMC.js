import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./table.scss"

const TableMC = () => {

    // queryの取得処理を追加
  const data = useStaticQuery(graphql`
  query {
    allContentfulMidCareer(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          enNumber
          spNumber
          enBisContent {
            enBisContent
          }
          spBisContent {
            spBisContent
          }
          treatment {
            treatment
          }
        }
      }
    }
  }
`)

  const number =  data.allContentfulMidCareer.edges


    return (
        <div>
            {number.map(({ node }) => (
            <table key="MC" border="2" width="70%" cellPadding="10" className="tablePosition">
              <tbody>
                <tr>
                    <th width="20%" className="coloring">募集職種</th>
                    <th width="40%">エンジニア職</th>
                    <th width="40%">ITサポート職</th>
                </tr>
                <tr>
                    <th className="coloring">募集人数</th>
                    <th>{node.enNumber}</th>
                    <th>{node.spNumber}</th>
                </tr>
                <tr>
                    <th className="coloring">業務内容</th>
                    <th>{node.enBisContent.enBisContent}</th>
                    <th>{node.spBisContent.spBisContent}</th>
                </tr>
                <tr>
                    <th className="coloring">待遇</th>
                    <th colSpan="2">{node.treatment.treatment}</th>
                </tr>
              </tbody>
            </table>
            ))}
        </div>
    )
}



export default TableMC;