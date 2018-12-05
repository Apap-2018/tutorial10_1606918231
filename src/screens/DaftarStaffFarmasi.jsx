import React from 'react';
import { DaftarStaffFarmasiRow } from '../components/DaftarStaffFarmasiRow';
import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { Appointment } from '../utils/Appointment';

export class DaftarStaffFarmasi extends React.Component {
	/** 
	 * TODO: Akses method getAllPasien() pada Appointment dan lakukan update state. 
	 * TODO: Lakukan pemanggilan pada constructor() atau pada lifecycle componentDidMount()
	 */

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			listStaffFarmasi: []
		}
		
		Appointment.getAllStafFarmasi().then(response => {
			this.setState({
				loading: false,
				listStaffFarmasi: response.result
			})
		})
	}

	render() {
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
        } else {
            return (
                <TableContainer title="Daftar Staff Farmasi" header={['Nama Staff', 'Jenis Staff', 'Aksi']}>
                    <DaftarStaffFarmasiRow listStaffFarmasi={this.state.listStaffFarmasi}/>
                </TableContainer>
            )
        }
	}
}