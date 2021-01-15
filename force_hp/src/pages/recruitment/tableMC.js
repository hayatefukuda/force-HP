import React from "react"

import "./table.scss"

const TableMC = () => {
    return (
        <div>
            <table border="2" width="70%" cellPadding="10" className="tablePosition">

                <tr>
                    <th width="20%" bgcolor="lightgreen">募集職種</th>
                    <th width="40%">エンジニア職</th>
                    <th width="40%">ITサポート職</th>
                </tr>
                <tr>
                    <th bgcolor="lightgreen">募集人数</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th bgcolor="lightgreen">業務内容</th>
                    <th></th>
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



export default TableMC;