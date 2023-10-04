import { ComponentProps, FC, useState } from 'react'

import { clsx } from 'clsx'

import { ArrowDown } from '../../icons/arrowDown.tsx'
import { ArrowUp } from '../../icons/arrowUp.tsx'
import { Edit } from '../../icons/edit.tsx'
import { Play } from '../../icons/play.tsx'
import { Trash } from '../../icons/trash.tsx'
import { Typography } from '../../typography/typography.tsx'

import s from './tableForPackList.module.scss'

export type RootProps = ComponentProps<'table'>

export const Root: FC<RootProps> = ({ className, ...rest }) => {
  const classNames = {
    table: clsx(className, s.table),
  }

  return <table className={classNames.table} {...rest} />
}

export type HeadProps = ComponentProps<'thead'>

export const Head: FC<HeadProps> = props => {
  return <thead {...props} />
}

export type BodyProps = ComponentProps<'tbody'>

export const Body: FC<BodyProps> = props => {
  return <tbody {...props} />
}

export type RowProps = ComponentProps<'tr'>

export const Row: FC<RowProps> = ({ className, ...rest }) => {
  const classNames = {
    row: clsx(className, s.row),
  }

  return <tr className={classNames.row} {...rest} />
}

export type HeadCellProps = ComponentProps<'th'>

export const HeadCell: FC<HeadCellProps> = ({ className, ...rest }) => {
  const classNames = {
    headCell: clsx(className, s.th),
  }

  return <th className={classNames.headCell} {...rest} />
}

export type CellProps = ComponentProps<'td'>

export const Cell: FC<CellProps> = ({ className, ...rest }) => {
  const classNames = {
    cell: clsx(className, s.tableCell),
  }

  return <td className={classNames.cell} {...rest} />
}

export const Empty: FC<ComponentProps<'div'> & { mt?: string; mb?: string }> = ({
  className,
  mt = '89px',
  mb,
}) => {
  const classNames = {
    empty: clsx(className, s.empty),
  }

  return (
    <Typography className={classNames.empty} style={{ marginTop: mt, marginBottom: mb }}>
      Пока тут еще нет данных! :(
    </Typography>
  )
}

export type TypeTestData = {
  id: number
  name: string
  cardsNumber: number
  lastDate: string
  createdBy: string
}

type TableProps = {
  rows: TypeTestData[]
}

export const TableForPackList: FC<TableProps> = ({ rows }) => {
  const [sortTable, setSortTable] = useState(false)
  const changeSort = (status: boolean) => setSortTable(status)

  return (
    <Root>
      <Head>
        <Row>
          <HeadCell>Name</HeadCell>
          <HeadCell>Cards</HeadCell>
          <HeadCell
            onClick={() => {
              changeSort(!sortTable)
            }}
          >
            Last Updated {sortTable ? <ArrowDown /> : <ArrowUp />}
          </HeadCell>
          <HeadCell>Created by</HeadCell>
          <HeadCell></HeadCell>
        </Row>
      </Head>
      <Body>
        {rows.map(el => {
          return (
            <Row key={el.id}>
              <Cell>{el.name}</Cell>
              <Cell>{el.cardsNumber}</Cell>
              <Cell>{el.lastDate}</Cell>
              <Cell>{el.createdBy}</Cell>
              <Cell>
                <Play />
                <Edit />
                <Trash />
              </Cell>
            </Row>
          )
        })}
      </Body>
      {/*{isModalType == 'edit' && (*/}
      {/*  <ModalDeletePack*/}
      {/*    closeModal={() => {*/}
      {/*      setModalType('')*/}
      {/*    }}*/}
      {/*  />*/}
      {/*)}*/}
    </Root>
  )
}

export const TableElement = {
  Root,
  Head,
  Body,
  Row,
  HeadCell,
  Cell,
  Empty,
}
