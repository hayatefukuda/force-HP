import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import "./table.scss"

const TableNG = () => {

    // queryの取得処理を追加
  const data = useStaticQuery(graphql`
  query MyQuery {
    contentfulNewGraduate {
      bisContent {
        bisContent
      }
      childContentfulNewGraduateReqQualTextNode {
        reqQual
      }
      reqNumEn
      reqNumSp
    }
  }
`)


    return (
        <div>
            <table border="2" width="70%" cellPadding="10"className="tablePosition">

                <tr>
                    <th width="20%" bgcolor="lightgreen">募集職種</th>
                    <th width="40%">エンジニア職</th>
                    <th width="40%">ITサポート職</th>
                </tr>
                <tr>
                    <th bgcolor="lightgreen">募集人数</th>
                    
                    {data.MyQuery.contentfulNewGraduate.map(({ reqNumEn }) => (
                        <th>{reqNumEn}</th>
                    ))}

                </tr>
                <tr>
                    <th bgcolor="lightgreen">応募資格</th>
                    <th colSpan="2"></th>
                </tr>
                <tr>
                    <th bgcolor="lightgreen">業務内容</th>
                    {/* {data.contentfulNewGraduate.bisContent.map(({bisContent}) => (
                        <th>{bisContent}</th>
                    ))} */}
                    <th></th>
                </tr>
                <tr>
                    <th bgcolor="lightgreen">待遇</th>
                    <th colSpan="2"></th>
                </tr>
            </table>
        </div>
    )
}



export default TableNG;