import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
  async index(req, res) {
    const isProvider = await User.findOne({
      where: { id: req.userID, provider: true },
    });

    if (!isProvider) {
      return res.status(401).json({
        error: 'Apenas providers podem carregar notificalçoes',
      });
    }

    const notifications = await Notification.find({
      user: req.userID,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return res.json(notifications);
  }

  async update(req, res) {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true } // new é para retornar a notificação atualizada
    );

    return res.json(notification);
  }
}

export default new NotificationController();
