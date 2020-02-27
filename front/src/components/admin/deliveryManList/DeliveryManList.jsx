import React from 'react';
import AdminHeader from '../adminHeader/AdminHeader';
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import DeliveryManListCard from './deliveryManListCard/DeliveryManListCard';

function DeliveryManList() {
    return (
        <div>
			<AdminHeader icon={faTruck} title="Liste livreurs" />
			<div>
			</div>
		</div>
    )
}

export default DeliveryManList;
