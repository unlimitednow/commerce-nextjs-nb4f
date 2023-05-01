import * as React from 'react'
import Badge from 'react-simple-badges'

export function Badge() {
  return (
    <>
      <Badge name="node.js" style={{ width: 200 }} logoColor="#eb4034" />
      <Badge name="YouTube Gaming" label="Youtube" />
      <Badge name="Valve" label="Steamy Boi" style={{ padding: 10 }} />
      <Badge name="Tesla" backgroundColor="#32a853" />
      <style jsx>{`
        .div {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 0px;
          text-align: center;
          line-height: 23px;
          height: auto;
          color: rgba(0, 0, 0, 1);
          font-family: Roboto, sans-serif;
          font-size: 16px;
          text-transform: uppercase;
        }
        @media (max-width: 640px) {
          .div {
            font-size: 15px;
            line-height: 22px;
            margin-bottom: 0px;
            margin-top: 20px;
          }
        }
      `}</style>
    </>
  )
}
