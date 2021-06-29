import CircularProgress from '@material-ui/core/CircularProgress';
export default function Loadings(props) {
    if (props.uiLoading === false) {
        return <p></p>
    }
    else {
        return (
            <CircularProgress />)
    }
}
