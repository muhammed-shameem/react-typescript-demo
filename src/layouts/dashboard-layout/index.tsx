import React from 'react'
import { makeStyles } from '@mui/styles';
import styles from "./styles"

const useStyles = makeStyles(styles)

export default function DashboardLayout() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      DashboardLayout
    </div>
  )
}
